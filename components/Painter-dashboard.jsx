import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { Pencil, Plus, Trash2 } from "lucide-react";

// Define the component as a function
const PainterDashboardComponent = ({ userData }) => {
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
  });
  const [paintings, setPaintings] = useState([
    { id: 1, title: "Sunset", imageUrl: "/placeholder.svg?height=200&width=300", description: "A beautiful sunset" },
    { id: 2, title: "Ocean", imageUrl: "/placeholder.svg?height=200&width=300", description: "Waves crashing on the shore" },
  ]);
  const [editingPainting, setEditingPainting] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [isPainter, setIsPainter] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://paintingauctionbackend-production.up.railway.app/api/profile/', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile({
          name: response.data.username,
          bio: response.data.email,
        });
        setIsPainter(response.data.is_painter || false);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setProfile({
      name: formData.get("name"),
      bio: formData.get("bio"),
    });
  };

  const handlePaintingUpload = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newPainting = {
      id: paintings.length + 1,
      title: formData.get("title"),
      imageUrl: "/placeholder.svg?height=200&width=300",
      description: formData.get("description"),
    };
    setPaintings([...paintings, newPainting]);
  };

  const handlePaintingEdit = (e) => {
    e.preventDefault();
    if (!editingPainting) return;
    const formData = new FormData(e.currentTarget);
    const updatedPainting = {
      ...editingPainting,
      title: formData.get("title"),
      description: formData.get("description"),
    };
    setPaintings(paintings.map(p => p.id === updatedPainting.id ? updatedPainting : p));
    setEditingPainting(null);
  };

  const handlePaintingDelete = (id) => {
    setPaintings(paintings.filter(p => p.id !== id));
  };

  const handleBecomePainter = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://paintingauctionbackend-production.up.railway.app/api/profile/become_painter/', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setIsPainter(true);
      alert('You have successfully applied to become a painter!');
    } catch (error) {
      console.error('Error applying to become a painter:', error);
      alert('Failed to apply. Please try again.');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
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
        );
      case 'become-painter':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Become a Painter</CardTitle>
            </CardHeader>
            <CardContent>
              {isPainter ? (
                <p>You are already a painter!</p>
              ) : (
                <div>
                  <p>Apply to become a painter and showcase your artwork!</p>
                  <Button onClick={handleBecomePainter}>Apply Now</Button>
                </div>
              )}
            </CardContent>
          </Card>
        );
      case 'my-paintings':
        return (
          <Card>
            <CardHeader>
              <CardTitle>My Paintings</CardTitle>
            </CardHeader>
            <CardContent>
              {/* My Paintings content */}
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-6">Painter Dashboard</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <button onClick={() => setActiveTab('profile')} className="text-blue-600 hover:underline">My Profile</button>
            </li>
            <li>
              <button onClick={() => setActiveTab('become-painter')} className="text-blue-600 hover:underline">Become a Painter</button>
            </li>
            <li>
              <button onClick={() => setActiveTab('my-paintings')} className="text-blue-600 hover:underline">My Paintings</button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto relative">
        {renderTabContent()}
        <div className="absolute top-4 right-4">
          <img
            src="/placeholder-avatar.png"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
        </div>
      </main>
    </div>
  );
};

// Export the component correctly
export default PainterDashboardComponent;
