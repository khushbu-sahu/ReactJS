import React, { useState } from "react"
import Prop1 from "./Prop1"
import Prop3 from "./Prop3"
import GetData from "./getData"
import InputText from "./InputText"

function Prop() {
    // let Items = ["shirt", "pants", "shoes", "hat", "socks"]

    let [textshow, settextstate] = useState("user last enter")
    // let textshow =" Item Entered b user";
    // let textState = useState("Item Entered by user")
    // let textshow =textState[0];
    // let settextstate = textState[1];
    // console.log(textshow);

    let [Items, setnewItem] = useState(["shirt", "pants", "shoes", "hat"])
    // function alertt(){
    //     alert("ready to buy");

    // }

    // const handleOnChange =(e) =>{
    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            let newItem = e.target.value;
            let newShopItem = [...Items, newItem];
            console.log("new Item is" + newItem);
            setnewItem(newShopItem)
            settextstate(e.target.value)

        }
    }
    //     settextstate(e.target.value)
    // }
    return (
        <>
            <h1>Shop Status</h1>
            <Prop1 item={Items} />
            {/* <input onKeyDown={(e) => {
                console.log(e.target.value);
            }} type="text" placeholder="Search items.." /> */}
            <InputText handleKeyDown={onKeyDown}></InputText>
            <p>` "User last enter is "+{textshow}`</p>
            <Prop3 item={Items} />
            {/* <GetData data={alertt}/> */}
        </>

    )
}

export default Prop