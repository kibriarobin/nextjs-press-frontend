"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

    console.log(formData, "from-data");
    console.log(prevState, "prev-state");

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

if(result.success){
    const cookieStore = await cookies()

    cookieStore.set("accessToken", result.data.accessToken, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 *24,
        sameSite: "lax"
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 *24 * 7,
        sameSite: "lax"
    });

    redirect("/dashboard");
}

  return result;
};
