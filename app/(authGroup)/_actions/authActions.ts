"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

type LoginState = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  prevState: LoginState,
  formData: FormData,
) => {
  // console.log(formData, "from-data");
  // console.log(prevState, "prev-state");

  const email = formData.get("email");
  const password = formData.get("password");

  const payload = { email, password };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });

    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

    if (decodedToken.role === "USER") {
      redirect("/dashboard");
    } else if (decodedToken.role === "ADMIN") {
      redirect("/admin-dashboard");
    } else if (decodedToken.role === "AUTHOR") {
      redirect("/author-dashboard");
    }
    console.log(decodedToken);
  }

  return result;
};

// register action
type RegisterProfile = {
  id: string;
  userId: string;
  profilePhoto: string | null;
  bio: string | null;
  createdAt: string;
  updatedAt: string;
};

type RegisterUser = {
  id: string;
  name: string;
  email: string;
  activeStatus: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  profile: RegisterProfile;
};

type RegisterState = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: {
    user: RegisterUser;
  };
};

export const registerAction = async (
  prevState: RegisterState,
  formData: FormData,
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const profilePhoto = formData.get("profilePhoto");

  const payload = {
    name,
    email,
    password,
    ...(profilePhoto ? { profilePhoto } : {}),
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  return result;
};
