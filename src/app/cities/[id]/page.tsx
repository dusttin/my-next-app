import { notFound } from "next/navigation";
import { getCityById } from "@/data/cities";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { LikeDislikeSection } from "./LikeDislikeSection";

interface CityDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const badgeVariants = {
  popular: "default",
  trending: "secondary",
  new: "outline",
} as const;

const badgeLabels = {
  popular: "인기",
  trending: "급상승",
  new: "신규",
} as const;

export default async function CityDetailPage({ params }: CityDetailPageProps) {
  const { id } = await params;
  const city = getCityById(id);

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={city.image}
          alt={city.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {city.name}
              </h1>
              {city.badge && (
                <Badge variant={badgeVariants[city.badge]}>
                  {badgeLabels[city.badge]}
                </Badge>
              )}
            </div>
            {city.district && (
              <p className="text-lg text-white/90">{city.district}</p>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Buttons */}
        <div className="flex gap-3 mb-8">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              뒤로가기
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              홈으로
            </Link>
          </Button>
        </div>

        {/* Basic Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground mb-2">예산</p>
              <p className="text-2xl font-bold">{city.monthlyCost}만원</p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground mb-2">지역</p>
              <p className="text-2xl font-bold">{city.region}</p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground mb-2">환경</p>
              <p className="text-2xl font-bold">{city.environment}</p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground mb-2">최고 계절</p>
              <p className="text-2xl font-bold">{city.bestSeason}</p>
            </div>
          </div>
        </section>

        {/* Like/Dislike Section */}
        <LikeDislikeSection
          initialLikes={city.likes}
          initialDislikes={city.dislikes}
        />
      </div>
    </div>
  );
}
