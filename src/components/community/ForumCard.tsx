import { MessageSquare, ThumbsUp, Clock, User, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

interface ForumPost {
  id: string;
  title: string;
  author: string;
  avatar?: string;
  category: string;
  content: string;
  likes: number;
  replies: number;
  timestamp: string;
  tags: string[];
  verified?: boolean;
}

interface ForumCardProps {
  post: ForumPost;
}

const ForumCard = ({ post }: ForumCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Housing": "bg-trust/10 text-trust border-trust/20",
      "Jobs": "bg-success/10 text-success border-success/20",
      "Safety": "bg-warning/10 text-warning border-warning/20",
      "Community": "bg-primary/10 text-primary border-primary/20",
      "Resources": "bg-accent/10 text-accent border-accent/20",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <Card className="p-6 hover:shadow-medium transition-all cursor-pointer border-border">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 bg-gradient-primary">
            {post.avatar ? (
              <img src={post.avatar} alt={post.author} />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-primary-foreground font-semibold">
                {post.author[0].toUpperCase()}
              </div>
            )}
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">{post.author}</span>
              {post.verified && (
                <Badge variant="secondary" className="text-xs bg-success/10 text-success border-success/20">
                  Verified
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        <Badge variant="outline" className={getCategoryColor(post.category)}>
          {post.category}
        </Badge>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
        {post.title}
      </h3>
      
      <p className="text-muted-foreground mb-4 line-clamp-2">
        {post.content}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            <ThumbsUp className="h-4 w-4" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            <MessageSquare className="h-4 w-4" />
            <span>{post.replies}</span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ForumCard;
export type { ForumPost };