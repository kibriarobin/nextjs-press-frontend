import { IPost } from "@/lib/type";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Eye, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type NewsCardProps = {
  post: IPost;
};

const NewsCard = ({ post }: NewsCardProps) => {
  return (
    <Link href={`/news/${post.id}`}>
      <Card className="overflow-hidden py-0 gap-0 hover:shadow-md transition-shadow">
        {/* Thumbnail */}
        <div className="relative h-44 w-full">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
          {post.isPremium && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
              Premium
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <div className="flex flex-wrap gap-1">
            {post.tags?.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="font-semibold text-lg leading-snug line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {post.content}
          </p>

          <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Avatar className="size-5">
                <AvatarFallback className="text-[10px] bg-primary/10 text-primary">
                  {post.author?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground/70">
                {post.author?.name}
              </span>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Eye className="size-3.5" />
                {post.views}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="size-3.5" />
                {post.comments?.length ?? 0}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default NewsCard;
