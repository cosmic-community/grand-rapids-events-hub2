export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    music: 'bg-purple-100 text-purple-800',
    art: 'bg-pink-100 text-pink-800',
    food: 'bg-orange-100 text-orange-800',
    sports: 'bg-blue-100 text-blue-800',
    family: 'bg-green-100 text-green-800',
    other: 'bg-gray-100 text-gray-800',
  };
  return (colors[category] || colors.other) as string;
}

export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    music: '🎵',
    art: '🎨',
    food: '🍺',
    sports: '🏒',
    family: '👨‍👩‍👧‍👦',
    other: '📅',
  };
  return (icons[category] || icons.other) as string;
}