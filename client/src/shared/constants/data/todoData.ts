import { ITodo } from "@/types/todo";

export const todoData: ITodo[] = [
  {
    uuid: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
    title: "Complete project documentation",
    position: 1,
    created_at: new Date("2025-01-15T10:30:00Z"),
    updated_at: new Date("2025-01-16T08:15:00Z"),
  },
  {
    uuid: "z1y2x3w4-v5u6-t7s8-r9q0-p1o2n3m4l5k6",
    title: "Prepare for client presentation",
    position: 2,
    created_at: new Date("2025-01-14T14:00:00Z"),
    updated_at: new Date("2025-01-15T16:45:00Z"),
  },
  {
    uuid: "m1n2o3p4-q5r6-s7t8-u9v0-w1x2y3z4a5b6",
    title: "Review quarterly financials",
    position: 3,
    created_at: new Date("2025-01-12T09:00:00Z"),
    updated_at: null,
  },
  {
    uuid: "k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6",
    title: "Plan team-building activity",
    position: 4,
    created_at: new Date("2025-01-10T11:30:00Z"),
    updated_at: new Date("2025-01-13T18:20:00Z"),
  },
  {
    uuid: "p1o2n3m4-l5k6-j7h8-i9g0-f1e2d3c4b5a6",
    title: "Update website content",
    position: 5,
    created_at: new Date("2025-01-08T15:45:00Z"),
    updated_at: new Date("2025-01-14T19:10:00Z"),
  },
];
