import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AllWishes } from "../_container/all-wishes-table";

export const data: AllWishes[] = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    relationship: "friend",
    message: "Chúc mừng hai bạn! Mong hai bạn sẽ mãi mãi hạnh phúc bên nhau 💕",
    attendance: "yes",
  },
  {
    id: "2",
    name: "Trần Thị B",
    relationship: "bride",
    message:
      "Chúc em gái và anh rể trăm năm hạnh phúc! Yêu thương nhau mãi mãi nhé 💖",
    attendance: "yes",
  },
  {
    id: "3",
    name: "Lê Văn C",
    relationship: "groom",
    message: "Chúc anh và chị dâu luôn vui vẻ, hạnh phúc trong cuộc sống mới!",
    attendance: "no",
  },
  {
    id: "4",
    name: "Phạm Thị D",
    relationship: "family",
    message:
      "Chúc hai cháu mãi mãi yêu thương, đồng hành cùng nhau trong cuộc sống 💗",
    attendance: "yes",
  },
  {
    id: "5",
    name: "Hoàng Văn E",
    relationship: "other",
    message:
      "Chúc mừng đám cưới! Mong hai bạn sẽ có một cuộc sống hôn nhân hạnh phúc và viên mãn",
    attendance: "yes",
  },
];

export const columns: ColumnDef<AllWishes>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tên
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "relationship",
    header: "Mối quan hệ",
    cell: ({ row }) => {
      const relationship = row.getValue("relationship") as string;
      const relationshipLabels: Record<string, string> = {
        friend: "Bạn Dâu Rể",
        groom: "Bạn chú Rể",
        bride: "Bạn cô Dâu",
        family: "Gia đình",
        other: "Khác",
      };
      return <div>{relationshipLabels[relationship] || relationship}</div>;
    },
  },
  {
    accessorKey: "attendance",
    header: "Tham dự",
    cell: ({ row }) => {
      const attendance = row.getValue("attendance") as string;
      return (
        <div
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            attendance === "yes"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {attendance === "yes" ? "Có tham dự" : "Không tham dự"}
        </div>
      );
    },
  },
  {
    accessorKey: "message",
    header: "Lời chúc",
    cell: ({ row }) => {
      const message = row.getValue("message") as string;
      return (
        <div className="max-w-xs text-wrap" title={message}>
          {message}
        </div>
      );
    },
  },
];
