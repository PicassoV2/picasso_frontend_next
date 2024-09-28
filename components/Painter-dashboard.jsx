import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Pencil, Plus, Trash2 } from "lucide-react"

export function PainterDashboardComponent() {
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    bio: "Abstract painter with a passion for colors.",
  })
  const [paintings, setPaintings] = useState([
    { id: 1, title: "Sunset", imageUrl: "/placeholder.svg?height=200&width=300", description: "A beautiful sunset" },
    { id: 2, title: "Ocean", imageUrl: "/placeholder.svg?height=200&width=300", description: "Waves crashing on the shore" },
  ])
  const [editingPainting, setEditingPainting] = useState(null)

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setProfile({
      name: formData.get("name"),
      bio: formData.get("bio"),
    })
  }

  const handlePaintingUpload = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newPainting = {
      id: paintings.length + 1,
      title: formData.get("title"),
      imageUrl: "/placeholder.svg?height=200&width=300", // In a real app, this would be the uploaded image URL
      description: formData.get("description"),
    }
    setPaintings([...paintings, newPainting])
  }

  const handlePaintingEdit = (e) => {
    e.preventDefault()
    if (!editingPainting) return
    const formData = new FormData(e.currentTarget)
    const updatedPainting = {
      ...editingPainting,
      title: formData.get("title"),
      description: formData.get("description"),
    }
    setPaintings(paintings.map(p => p.id === updatedPainting.id ? updatedPainting : p))
    setEditingPainting(null)
  }

  const handlePaintingDelete = (id) => {
    setPaintings(paintings.filter(p => p.id !== id))
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-6">Painter Dashboard</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#profile" className="text-blue-600 hover:underline">Profile</a>
            </li>
            <li>
              <a href="#paintings" className="text-blue-600 hover:underline">My Paintings</a>
            </li>
            <li>
              <a href="#upload" className="text-blue-600 hover:underline">Upload Painting</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto relative">
        <div className="absolute top-4 right-4">
          <img
            src="/placeholder-avatar.png"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
        </div>
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="paintings">My Paintings</TabsTrigger>
            <TabsTrigger value="upload">Upload Painting</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>My Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" defaultValue={profile.name} />
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" name="bio" defaultValue={profile.bio} />
                  </div>
                  <Button type="submit">Update Profile</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="paintings">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paintings.map((painting) => (
                <Card key={painting.id}>
                  <CardContent className="p-4">
                    <img
                      src={painting.imageUrl}
                      alt={painting.title}
                      className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">{painting.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{painting.description}</p>
                    <div className="flex justify-between">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setEditingPainting(painting)}>
                            <Pencil className="w-4 h-4 mr-2" /> Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Painting</DialogTitle>
                          </DialogHeader>
                          <form onSubmit={handlePaintingEdit} className="space-y-4">
                            <div>
                              <Label htmlFor="edit-title">Title</Label>
                              <Input id="edit-title" name="title" defaultValue={editingPainting?.title} />
                            </div>
                            <div>
                              <Label htmlFor="edit-description">Description</Label>
                              <Textarea
                                id="edit-description"
                                name="description"
                                defaultValue={editingPainting?.description} />
                            </div>
                            <Button type="submit">Save Changes</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handlePaintingDelete(painting.id)}>
                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Painting</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePaintingUpload} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name="title" required />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" required />
                  </div>
                  <div>
                    <Label htmlFor="image">Image</Label>
                    <Input id="image" name="image" type="file" accept="image/*" required />
                  </div>
                  <Button type="submit">
                    <Plus className="w-4 h-4 mr-2" /> Upload Painting
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}