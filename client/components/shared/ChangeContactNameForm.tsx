import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUserChat from "@/hooks/useUserChat";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { useState } from "react";

export function ChangeContactNameForm() {
  const { userName, setUserName } = useUserChat();
  const [newUserName, setNewUserName] = useState(userName);

  async function changeName() {
    setUserName(newUserName);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <BorderColorRoundedIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Contact Name</DialogTitle>
          <DialogDescription>Make changes to your contact name here. Click save when you&lsquo;re done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newUserName}
              onChange={(e) => {
                setNewUserName(e.target.value);
              }}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={changeName}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
