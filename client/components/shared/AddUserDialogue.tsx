import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddUserForm from "./AddUserForm"


const AddUserDialogue =()=> {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Enter the name and email to add a new user
          </DialogDescription>
        </DialogHeader>         
        <AddUserForm/>              
      </DialogContent>
    </Dialog>
  )
}

export default AddUserDialogue
