"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LikeDislikeSectionProps {
  initialLikes: number;
  initialDislikes: number;
}

export function LikeDislikeSection({
  initialLikes,
  initialDislikes,
}: LikeDislikeSectionProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [dislikesCount, setDislikesCount] = useState(initialDislikes);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setLiked(true);
      setLikesCount(likesCount + 1);
      if (disliked) {
        setDisliked(false);
        setDislikesCount(dislikesCount - 1);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikesCount(dislikesCount - 1);
    } else {
      setDisliked(true);
      setDislikesCount(dislikesCount + 1);
      if (liked) {
        setLiked(false);
        setLikesCount(likesCount - 1);
      }
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">이 도시가 마음에 드시나요?</h2>
      <div className="flex gap-4">
        <Button
          variant={liked ? "default" : "outline"}
          size="lg"
          onClick={handleLike}
          className="flex-1"
        >
          <ThumbsUp
            className={`mr-2 h-5 w-5 ${liked ? "fill-current" : ""}`}
          />
          좋아요 ({likesCount})
        </Button>
        <Button
          variant={disliked ? "destructive" : "outline"}
          size="lg"
          onClick={handleDislike}
          className="flex-1"
        >
          <ThumbsDown
            className={`mr-2 h-5 w-5 ${disliked ? "fill-current" : ""}`}
          />
          싫어요 ({dislikesCount})
        </Button>
      </div>
    </section>
  );
}
