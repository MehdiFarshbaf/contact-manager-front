import MainLayout from "./layouts/MainLayout";
import {Navigate, Route, Routes} from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AddContacts from "./components/contacts/AddContacts";
import ContactDetails from "./pages/ContactDetails";

const App = () => {
  return (
    <MainLayout>
        <Routes>
            <Route path="/" element={<Navigate to="/contacts" />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/contacts/:contactId" element={<ContactDetails />} />
            <Route path="/add-contact" element={<AddContacts />} />
        </Routes>
    </MainLayout>
  )
}
export default App