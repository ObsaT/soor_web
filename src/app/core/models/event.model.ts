export interface EventModel {
  id: string;
  title: string;
  date: string; // ISO
  location: string;
  image?: string;
  description?: string;
  distance?: string;
  category?: 'Marathon'|'Half'|'Kids'|'Other';
}
