import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Sample data for suggestions (avatar URLs, usernames, profile URLs)
const suggestionData = [
  { avatarUrl: '/images/chat-user.png', username: 'User1', profileUrl: '/profiles/user1' },
  { avatarUrl: '/images/man-profile.png', username: 'User2', profileUrl: '/profiles/user2' },
  { avatarUrl: '/images/rupee.png', username: 'User3', profileUrl: '/profiles/user3' },
  { avatarUrl: '/images/woman-post.png.png', username: 'User4', profileUrl: '/profiles/user4' },
  { avatarUrl: '/images/scenery-3.png', username: 'User5', profileUrl: '/profiles/user5' },
];

export function SuggestionsList() {
  const handleFollow = (profileUrl: string) => {
    window.location.href = profileUrl;
  };

  return (
    <div className="my-4 mt-12 flex flex-col shadow-2xl drop-shadow-xl rounded-md border border-gray-300 pt-8 w-[25vw] xl:w-[22vw]">
      <div className="flex items-center px-8">
        <Avatar className="cursor-pointer mr-6">
          <AvatarImage src="/images/man-profile.png" alt="Avatar man" />
          <AvatarFallback>
            <span className={cn('text-gray-500', 'text-lg')}>|</span>
          </AvatarFallback>
        </Avatar>
        <span className="text-black font-semibold text-xl">User Name</span>
      </div>
      <h2 className="px-8 py-6 bg-gray-250  text-sm font-bold uppercase">
        Suggestions
      </h2>
      <div className="flex flex-col h-full w-full justify-between space-y-2 pt-2">
        <div>
          {suggestionData.map((suggestion, index) => (
            <div key={suggestion.avatarUrl} className="flex items-center justify-between w-full gap-12 px-8 py-2">
              <div className="flex items-center">
                <Avatar className="cursor-pointer mr-8">
                  <AvatarImage src={suggestion.avatarUrl} alt={`Avatar ${index + 1}`} />
                  <AvatarFallback>
                    <span className={cn('text-gray-500', 'text-lg')}>|</span>
                  </AvatarFallback>
                </Avatar>
                <span className="text-black font-semibold">{suggestion.username}</span>
              </div>
              <Button
                className=""
                onClick={() => handleFollow(suggestion.profileUrl)}
                variant="link"
            >
                Follow
              </Button>
            </div>
        ))}
        </div>
        {/* Footer */}
        <footer className="bg-gray-200 px-8 py-4 text-center">
          <div className="flex flex-wrap justify-center">

            <a href="/help" className="text-primary hover:underline">About Us</a>
            <span className="px-1 text-primary">.</span>
            <a href="/help" className="text-primary hover:underline">Help</a>
            <span className="px-1 text-primary">.</span>
            <a href="/privacy" className="text-primary hover:underline">Privacy</a>
            <span className="px-1 text-primary">.</span>
            <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>
          </div>
          <p className="mt-2 text-gray-600 text-sm">&copy; 2024 funclub</p>
        </footer>
      </div>
    </div>
  );
}

