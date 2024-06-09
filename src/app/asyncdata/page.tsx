// export default async function Page() {
//   const seed = Math.random().toString(36).substring(7);
//   const response = await fetch(`https://randomuser.me/api/?seed=${seed}`);
//   const { results } = await response.json();

//   // Destructure user data and provide default values if data is null or undefined
//   const {
//     gender = "Unknown",
//     name: { title = "Unknown", first = "Unknown", last = "Unknown" } = {},
//     location: {
//       street: {
//         number: streetNumber = "Unknown",
//         name: streetName = "Unknown",
//       } = {},
//       city = "Unknown",
//       state = "Unknown",
//       country = "Unknown",
//       postcode = "Unknown",
//       coordinates: { latitude = "Unknown", longitude = "Unknown" } = {},
//       timezone: { offset = "Unknown", description = "Unknown" } = {},
//     } = {},
//     email = "Unknown",
//     login: { uuid = "Unknown", username = "Unknown" } = {},
//     dob: { date: birthDate = "Unknown", age = "Unknown" } = {},
//     registered: { date: registrationDate = "Unknown" } = {},
//     phone = "Unknown",
//     cell = "Unknown",
//     id: { name: idName = "Unknown", value: idValue = "Unknown" } = {},
//     picture: { large: picture = "" } = {},
//     nat = "Unknown",
//   } = results[0] || {};

//   return (
//     <div className="bg-black py-[50px] text-green-300 flex items-center justify-center">
//       <div className="text-center bg-white">
//         <img
//           src={picture}
//           alt="User"
//           className="w-24 h-24 rounded-full mx-auto mb-4"
//         />
//         <table className="table-fixed mx-auto">
//           <tbody>
//             <tr className="bg-gray-800">
//               <td className="w-1/4 px-4 py-2">Attribute</td>
//               <td className="w-3/4 px-4 py-2">Value</td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Gender</td>
//               <td className="px-4 py-2">{gender}</td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Name</td>
//               <td className="px-4 py-2">
//                 {title} {first} {last}
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Location</td>
//               <td className="px-4 py-2">
//                 {streetNumber} {streetName}, {city}, {state}, {country},{" "}
//                 {postcode}
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Coordinates</td>
//               <td className="px-4 py-2">
//                 {latitude}, {longitude}
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Timezone</td>
//               <td className="px-4 py-2">
//                 {offset}, {description}
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Email</td>
//               <td className="px-4 py-2">{email}</td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Username</td>
//               <td className="px-4 py-2">{username}</td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Date of Birth</td>
//               <td className="px-4 py-2">
//                 {birthDate} (Age: {age})
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Registration Date</td>
//               <td className="px-4 py-2">{registrationDate}</td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Phone</td>
//               <td className="px-4 py-2">{phone}</td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Cell</td>
//               <td className="px-4 py-2">{cell}</td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">ID</td>
//               <td className="px-4 py-2">
//                 {idName} - {idValue}
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Nationality</td>
//               <td className="px-4 py-2">{nat}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

async function fetchData() {
  try {
    const response = await fetch("http://internal-service", {
      cache: "no-store",
    });
    const data = await response.json();
    return data.title;
  } catch (err) {
    console.log(err);
    return "Could not access server data";
  }
}

export default async function Page() {
  const title = await fetchData();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-black p-8 rounded shadow-md">
        <h1 className="text-3xl text-green-300 font-bold mb-4">{title}</h1>
      </div>
    </div>
  );
}
