import './service.scss'
import ServiceCard from './ServiceCard'
import { AttachMoney, ContentPaste,MonetizationOnIcon,Send } from '@material-ui/icons'
export default function Service() {
    const data =[
        {
            id:1,
            icon:'send',
            title:"Digital Marketing",
            content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."

        },
        {
            id:2,
            icon:'MonetizationOnIcon',
            title:"Digital Marketing",
            content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."

        },
        {
            id:3,
            icon:'Send',
            title:"Digital Marketing",
            content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."

        },
        {
            id:4,
            icon:'Send',
            title:"Digital Marketing",
            content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."

        },
        {
            id:5,
            icon:'Send',
            title:"Digital Marketing",
            content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."

        },
        {
            id:6,
            icon:'Send',
            title:"Digital Marketing",
            content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."

        },
    ]
    return (
        <div className="service">
          <div className="serviceCard">
            {data.map((d)=>(
                <ServiceCard title={d.title} content={d.content}/>
            ))}
         </div>
        </div>
    )
}
