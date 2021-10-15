import { useState } from "react"


const useDeliveryInfo = () => {
    const [userInfo, setUserInfo] = useState({
        name: null,
        house: null,
        country: null,
        phone: null,
        save: false
    })

    return [userInfo, setUserInfo];
}

export default useDeliveryInfo;