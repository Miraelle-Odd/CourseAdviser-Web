import React from 'react'
import './PostView.css'
import Footer from '../../../components/Footer/Footer'
import WorkplaceLayout from '../../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplacePostUpdate from '../../../components/LayoutComponents/WorkplacePage/PostDetails/WorkplacePostUpdate'
import { useParams } from 'react-router-dom'



const PostUpdate = props => {
    const renderPostUpdate = (id) => {
        
        return (
            <div className='post-man-body'>
                {
                    id ? (
                        <WorkplacePostUpdate
                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, alias molestiae. Magnam dolorem ipsa minus omnis numquam voluptas"
                            subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, alias molestiae. Magnam dolorem ipsa minus omnis numquam voluptas"
                            contain="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, alias molestiae. Magnam dolorem ipsa minus omnis numquam voluptas voluptatum aliquam adipisci laboriosam voluptatem voluptates, veniam deserunt eaque in molestias vitae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cumque delectus! Deserunt odio architecto nemo dolorum, error placeat sapiente dolore beatae dicta earum quibusdam fuga quis delectus vel accusamus quas?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis hic voluptatum fugit, delectus odit quas eum? Quae, officiis atque? Eos fugit voluptatibus, nam deserunt harum nemo inventore velit recusandae! Quos.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore accusantium cum corrupti ratione doloribus iure nam quod? Saepe quod id dolores quasi aliquid nostrum quia beatae expedita fugiat esse?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum cumque impedit totam mollitia temporibus ab officiis eum eius, ad magni recusandae, aliquid voluptatem sint. Quasi eum iure distinctio mollitia!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vitae officiis fugiat magni. Sunt et repellendus nobis, voluptas doloremque labore accusamus doloribus blanditiis perspiciatis obcaecati harum quisquam omnis quibusdam. Tempora?"
                            name="Nguyễn Hồ Quỳnh Thư"
                            date="DD/MM/YYYY"
                            img={"https://picsum.photos/200/300"}
                        ></WorkplacePostUpdate>
                    ) : (
                        <WorkplacePostUpdate
                            name="Nguyễn Hồ Quỳnh Thư"
                            date="DD/MM/YYYY"
                        ></WorkplacePostUpdate>
                    )
                }
    
            </div>
        )
    }
    let {id} = useParams();
    return (
        <div className='userpage-container'>
            
            <WorkplaceLayout title="Quản lý bài viết"
                renderBody={renderPostUpdate(id)}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default PostUpdate;