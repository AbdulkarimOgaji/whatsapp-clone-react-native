import React, { useEffect } from "react";
import RootStack from "./routes/ContainerStack";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Contacts from "expo-contacts";

const isPhoneNumber = (s: string | undefined): s is string => {
  return !!s;
};

type ContactDataType = {
  name: string;
  number: string;
  about: string;
  isMessaged: boolean;
  displayPicture: string
}

type ContactType = {
  name: string;
  number: string;
}

function getUniqueListBy(arr: ContactType[]) {
  return [...new Map(arr.map((item) => [item['number'], item])).values()]
}


const contactToLocal = async(contact: ContactType) => {
  // fetch data from server 
  const data: ContactDataType = {
    name: contact.name,
    number: contact.number,
    isMessaged: false,
    displayPicture: "",
    about: "Hey there!, I am using WhatsLication"
  }
  const status = await MediaLibrary.requestPermissionsAsync()
  if (status.granted) {
    const saveFile = FileSystem.documentDirectory + data.number + ".txt"
    await FileSystem.writeAsStringAsync(saveFile, JSON.stringify(data), { encoding: FileSystem.EncodingType.UTF8 })
    console.log("Writing ", contact.name, " to file")
    const asset = await MediaLibrary.createAssetAsync(saveFile)
    await MediaLibrary.createAlbumAsync("Contact", asset, false)
  }
}

const fetchContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  let contacts: ContactType[] = []
  if (status === "granted") {
    const { data } = await Contacts.getContactsAsync();
    data.forEach(contact => {
      if (contact.phoneNumbers) {
        const phoneNumbers = contact.phoneNumbers.map(num => num.number).filter(isPhoneNumber)
        phoneNumbers.forEach(num => {
          let newContact = { name: contact.name, number: num }
          contacts.push(newContact)
        })

      }
    })
  }
  return getUniqueListBy(contacts)
};

const saveContacts = async(contacts: ContactType[]) => {
  for await (let contact of contacts) {
    contactToLocal(contact)
  }
}

export default function App() {
  useEffect(() => {
    console.log("Using Effect");
    fetchContacts().then(res => {
      const contacts = res
      saveContacts(contacts)
    }).catch(err => console.log(err))

    

    // fetch contacts' data from database
    // save data to file
  });
  return <RootStack />;
}
