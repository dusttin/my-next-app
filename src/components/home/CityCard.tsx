"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface CityCardProps {
  city: {
    id: string;
    name: string;
    district?: string;
    image: string;
    badge?: "popular" | "trending" | "new";
    monthlyCost: number;
    region: string;
    environment: string;
    bestSeason: string;
    likes: number;
    dislikes: number;
  };
}

export function CityCard({ city }: CityCardProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(city.likes);
  const [dislikesCount, setDislikesCount] = useState(city.dislikes);

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "popular":
        return "default";
      case "trending":
        return "secondary";
      case "new":
        return "outline";
      default:
        return "default";
    }
  };

  const getBadgeLabel = (badge: string) => {
    switch (badge) {
      case "popular":
        return "🔥 인기";
      case "trending":
        return "📈 급상승";
      case "new":
        return "🆕 신규";
      default:
        return "";
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (liked) {
      // 좋아요 취소
      setLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      // 좋아요 활성화
      setLiked(true);
      setLikesCount(likesCount + 1);
      // 싫어요가 활성화되어 있었다면 비활성화
      if (disliked) {
        setDisliked(false);
        setDislikesCount(dislikesCount - 1);
      }
    }
  };

  const handleDislike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (disliked) {
      // 싫어요 취소
      setDisliked(false);
      setDislikesCount(dislikesCount - 1);
    } else {
      // 싫어요 활성화
      setDisliked(true);
      setDislikesCount(dislikesCount + 1);
      // 좋아요가 활성화되어 있었다면 비활성화
      if (liked) {
        setLiked(false);
        setLikesCount(likesCount - 1);
      }
    }
  };

  return (
    <Link href={`/cities/${city.id}`} className="block">
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
            style={{
              backgroundImage: `url(${city.image})`,
            }}
          />
          {city.badge && (
            <Badge
              variant={getBadgeVariant(city.badge)}
              className="absolute top-3 left-3"
            >
              {getBadgeLabel(city.badge)}
            </Badge>
          )}
        </div>

        <CardContent className="p-4 space-y-4">
          {/* City Name */}
          <div>
            <h3 className="font-semibold text-lg">
              {city.name}
              {city.district && (
                <span className="text-muted-foreground text-sm ml-1">
                  {city.district}
                </span>
              )}
            </h3>
          </div>

          {/* Filter Information */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">예산</span>
              <span className="font-medium">{city.monthlyCost}만원</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">지역</span>
              <span className="font-medium">{city.region}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">환경</span>
              <span className="font-medium">{city.environment}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">최고 계절</span>
              <span className="font-medium">{city.bestSeason}</span>
            </div>
          </div>

          {/* Like/Dislike Buttons */}
          <div className="flex items-center justify-between pt-2 border-t">
            <button
              onClick={handleLike}
              className="flex items-center gap-2 transition-colors"
            >
              <ThumbsUp
                className={`h-5 w-5 ${
                  liked
                    ? "fill-blue-500 text-blue-500"
                    : "text-muted-foreground hover:text-blue-500"
                }`}
              />
              <span className={`text-sm font-medium ${liked ? "text-blue-500" : ""}`}>
                {likesCount}
              </span>
            </button>
            <button
              onClick={handleDislike}
              className="flex items-center gap-2 transition-colors"
            >
              <span className={`text-sm font-medium ${disliked ? "text-red-500" : ""}`}>
                {dislikesCount}
              </span>
              <ThumbsDown
                className={`h-5 w-5 ${
                  disliked
                    ? "fill-red-500 text-red-500"
                    : "text-muted-foreground hover:text-red-500"
                }`}
              />
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
