"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import Link from "next/link";
import { BookIcon } from "@/assets/icons";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Vui lòng nhập tên của bạn",
  }),
  relationship: z.string({
    error: "Vui lòng chọn mối quan hệ",
  }),
  message: z.string().min(10, {
    message: "Lời chúc phải có ít nhất 10 ký tự",
  }),
  attendance: z.enum(["yes", "no"], {
    error: "Vui lòng chọn trạng thái tham dự",
  }),
});

const BlessingForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      relationship: "friend",
      message: "",
      attendance: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="section bg-[url('/assets/images/bg-section.png')] bg-cover bg-center bg-no-repeat relative rounded-lg overflow-hidden">
      <div className="w-full mx-auto px-4">
        <div className="text-center space-y-1 mb-8">
          <div className="w-full flex justify-center">
            <BookIcon className="size-10 text-turquoise" />
          </div>
          <h1 className="text-4xl text-[#4a4a4a] font-bold">Sổ Lưu Bút</h1>
          <div className="required w-[150px] h-auto mx-auto">
            <Image
              src="/assets/images/line-4.png"
              alt="line"
              width={150}
              height={30}
              className="size-full object-contain"
            />
          </div>
          <p className="mt-4">
            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
            đám cưới của chúng mình!
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Họ và Tên"
                          className="bg-white border-gray-200 h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="relationship"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-white border-gray-200 !size-full">
                            <SelectValue placeholder="Bạn Dâu Rể" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="friend">Bạn Dâu Rể</SelectItem>
                          <SelectItem value="bride">Bạn cô Dâu</SelectItem>
                          <SelectItem value="groom">Bạn chú Rể</SelectItem>
                          <SelectItem value="family">Gia đình</SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Nhập lời chúc của bạn"
                        className="bg-white border-gray-200 min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="attendance"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col gap-3"
                      >
                        <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-pink-300 transition-colors flex-1">
                          <RadioGroupItem value="yes" id="yes" />
                          <Label
                            htmlFor="yes"
                            className="font-normal flex items-center gap-2 cursor-pointer flex-1"
                          >
                            Có, tôi sẽ đến 💗
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-pink-300 transition-colors flex-1">
                          <RadioGroupItem value="no" id="no" />
                          <Label
                            htmlFor="no"
                            className="font-normal cursor-pointer flex-1"
                          >
                            Xin lỗi, tôi không đến được 🥹
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-14 bg-turquoise text-white text-lg rounded-full shadow-lg"
              >
                Gửi lời chúc cho Dâu Rể
              </Button>
            </form>
          </Form>

          <div className="text-center mt-6">
            <Link
              href="/all-wishes"
              className="inline-flex items-center gap-2 text-turquoise underline hover:text-turquoise/80"
            >
              <Mail className="w-4 h-4 text-turquoise" />
              Xem tất cả lời chúc của mọi người
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlessingForm;
