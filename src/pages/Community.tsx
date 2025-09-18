import { useState } from "react";
import ForumCard, { ForumPost } from "@/components/community/ForumCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Filter } from "lucide-react";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock forum posts
  const posts: ForumPost[] = [
    {
      id: "1",
      title: "Looking for a roommate in downtown area",
      author: "Maria Chen",
      category: "Housing",
      content: "I'm searching for a trustworthy roommate to share a 2-bedroom apartment downtown. Rent is $800/month, utilities included. The apartment has great amenities and is close to public transport.",
      likes: 24,
      replies: 8,
      timestamp: "2 hours ago",
      tags: ["roommate", "downtown", "apartment"],
      verified: true,
    },
    {
      id: "2",
      title: "Job opportunity at local restaurant - No experience needed",
      author: "Sofia Rodriguez",
      category: "Jobs",
      content: "My workplace is hiring servers and kitchen staff. No experience needed, training provided. Flexible hours, good tips, friendly environment. Apply at Mario's Restaurant on Main Street.",
      likes: 67,
      replies: 23,
      timestamp: "5 hours ago",
      tags: ["jobs", "restaurant", "no-experience"],
      verified: true,
    },
    {
      id: "3",
      title: "Warning: Overpriced grocery store on 8th Avenue",
      author: "Ahmed Hassan",
      category: "Safety",
      content: "Be careful shopping at QuickMart on 8th Ave. They're charging double for basic items. Rice $6/kg when it should be $3. Better to shop at Fresh Market on 5th Street.",
      likes: 89,
      replies: 34,
      timestamp: "1 day ago",
      tags: ["scam-alert", "groceries", "prices"],
      verified: false,
    },
    {
      id: "4",
      title: "Free English classes every Tuesday",
      author: "Linda Thompson",
      category: "Resources",
      content: "The community center offers free English classes every Tuesday 6-8 PM. All levels welcome. They also help with resume writing and job applications. Great opportunity!",
      likes: 156,
      replies: 42,
      timestamp: "2 days ago",
      tags: ["education", "english", "free"],
      verified: true,
    },
    {
      id: "5",
      title: "Monthly cultural meet-up this Saturday",
      author: "Carlos Mendez",
      category: "Community",
      content: "Join us for our monthly cultural exchange meetup! Bring a dish from your country if you can. Great way to meet people and share experiences. Location: Community Hall, 3 PM.",
      likes: 93,
      replies: 28,
      timestamp: "3 days ago",
      tags: ["meetup", "cultural", "social"],
      verified: false,
    },
  ];

  const categories = ["All", "Housing", "Jobs", "Safety", "Community", "Resources"];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Community Forum</h1>
          <p className="text-lg text-muted-foreground">
            Connect, share experiences, and help each other thrive
          </p>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="w-full justify-start overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="All" className="space-y-6 mt-6">
            {posts.map((post) => (
              <ForumCard key={post.id} post={post} />
            ))}
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category} value={category} className="space-y-6 mt-6">
              {posts
                .filter((post) => post.category === category)
                .map((post) => (
                  <ForumCard key={post.id} post={post} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Community;