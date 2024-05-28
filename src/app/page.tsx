import Header from "@/components/Header";
import Left from "@/components/Left"
import Middle from "@/components/Middle"
import Right from "@/components/Right"

export default function Home() {
  return (
   <div>
    <Header />
    <div className = "flex">
      <div className=" w-1/4">
    <Left />
      </div>
      <div className = "w-2/4">
    <Middle />

      </div>
      <div className = "w-1/4">
        <Right />
      </div>
    </div>
   
   </div>
  );
}
