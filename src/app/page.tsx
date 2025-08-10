import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Hello World! 👋</CardTitle>
            <CardDescription>
              Your Next.js boilerplate is ready with shadcn/ui and Magic UI MCP
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Start building amazing things with:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">
                Next.js 15
              </span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">
                shadcn/ui
              </span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">
                Magic UI MCP
              </span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">
                Lucide React
              </span>
            </div>
            <Button className="w-full">Get Started Building</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
