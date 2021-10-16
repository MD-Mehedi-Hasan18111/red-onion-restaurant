import { useState } from "react"


const useDeliveryInfo = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        house: '',
        country: '',
        phone: '',
        save: false
    })

    return [userInfo, setUserInfo];
}

export default useDeliveryInfo;