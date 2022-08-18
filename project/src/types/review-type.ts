type UserType = {
  id: number,
  name: string
}
export type ReviewType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: UserType
};
