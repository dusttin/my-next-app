import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, ChevronDown } from "lucide-react";

export function FilterBar() {
  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="검색 또는 필터..."
              className="pl-10"
            />
          </div>

          {/* Budget Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 flex-1 justify-between">
                <span className="flex items-center gap-2">
                  💰 예산
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>100만원 이하</DropdownMenuItem>
              <DropdownMenuItem>100~200만원</DropdownMenuItem>
              <DropdownMenuItem>200만원 이상</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Region Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 flex-1 justify-between">
                <span className="flex items-center gap-2">
                  📍 지역
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>전체</DropdownMenuItem>
              <DropdownMenuItem>수도권</DropdownMenuItem>
              <DropdownMenuItem>경상도</DropdownMenuItem>
              <DropdownMenuItem>전라도</DropdownMenuItem>
              <DropdownMenuItem>강원도</DropdownMenuItem>
              <DropdownMenuItem>제주도</DropdownMenuItem>
              <DropdownMenuItem>충청도</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Environment Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 flex-1 justify-between">
                <span className="flex items-center gap-2">
                  🌿 환경
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>자연친화</DropdownMenuItem>
              <DropdownMenuItem>도심선호</DropdownMenuItem>
              <DropdownMenuItem>카페작업</DropdownMenuItem>
              <DropdownMenuItem>코워킹 필수</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Best Season Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 flex-1 justify-between">
                <span className="flex items-center gap-2">
                  🌸 최고 계절
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>봄</DropdownMenuItem>
              <DropdownMenuItem>여름</DropdownMenuItem>
              <DropdownMenuItem>가을</DropdownMenuItem>
              <DropdownMenuItem>겨울</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
