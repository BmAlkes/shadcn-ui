import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Home() {
  async function onSubmit(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");

    console.log(name, email);
  }
  return (
    <main className="w-full">
      <Card className="max-w-3xl m-auto mt-12">
        <CardHeader>
          <CardTitle className="flex">
            <span className="flex-1">Welcome to the systeam, Bruno</span>{" "}
            <Dialog>
              <DialogTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/BmAlkes.png" />
                  <AvatarFallback>Bmalkes</AvatarFallback>
                </Avatar>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when youre
                    done.
                  </DialogDescription>
                </DialogHeader>
                <form action={onSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        required
                        id="name"
                        name="name"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label
                        htmlFor="username"
                        id="email"
                        className="text-right"
                      >
                        Email
                      </Label>
                      <Input
                        required
                        id="email"
                        name="email"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </CardTitle>
          <CardDescription>
            Click in the picture to edit the account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}
