import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './OurServices.css'
import SingleService from './SingleService';

const OurServices = () => {


   
    
    
    //get the data from links from homePage
    const location = useLocation()
    
    useEffect(() => {

        //get the data from links from homePage
        fetch("https://beauti-saloon.herokuapp.com/services")
            .then(res => res.json())
            .then((data)=>{
                // if link was empty fetch nail by default
                if(location.state === null ){
                    const filteredData =  data.filter(item => item.type === 'nails')
                    return setServices(filteredData)
                }else{
                    const filteredData =  data.filter(item => item.type === location.state)
                    return setServices(filteredData)
                }
            })
            .catch(err=> console.log(err))
        
        // this function is the same function for moving the marker div
        const moveMarker = function moveMarker(offset ,width) {
            const marker = document.querySelector('.selected-item');
            const header = document.querySelector('.headers');
            const elementOffset = offset - header.offsetLeft;
    
            marker.style.width = width + 'px';
            marker.style.transform = `translate(${elementOffset}px, -3px)`;    
        };

        // check if client manually comes to services page load nails data
        if(location.state === null){
            // get the nails element 
            let targetElement = document.querySelector(`#nails`)
            let offset = targetElement.offsetLeft
            let width = targetElement.getBoundingClientRect().width
        
            // move the marker to the nails element
            moveMarker(offset , width)

        }else{

            // get the target element that link is going to fetch its data 
            let targetElement = document.querySelector(`#${location.state}`)
            let offset = targetElement.offsetLeft
            let width = targetElement.getBoundingClientRect().width
            
            // move the marker to the specific element
            moveMarker(offset , width)
        }



    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const [services , setServices] = useState([]);

    // load services from database in desktop view
    const loadService = async (e) => {
        try{
            const servicesData = await fetch('https://beauti-saloon.herokuapp.com/services');
            const servicesJson = await servicesData.json();
            const filteredData =  servicesJson.filter(item => item.type === e.target.id)
            setServices(filteredData);

        }catch(err){
            console.log(err)
        }
    }
    
    // load services from database in mobile view
    const SelectServices =async (e)=>{
        try{
            const servicesData = await fetch('https://beauti-saloon.herokuapp.com/services');
            const servicesJson = await servicesData.json();
            const filteredData =  servicesJson.filter(item => item.type === e.target.value)
            setServices(filteredData);

        }catch(err){
            console.log(err)
        }
    }



    // border effect functions
    useEffect(()=>{

        //get element offset
    const  getItemOffset = function getItemOffset(item) {
        return item.offsetLeft;
    };
      
    //move the div (border)
    const moveMarker = function moveMarker(offset ,width) {
        const marker = document.querySelector('.selected-item');
        const header = document.querySelector('.headers');
        const elementOffset = offset - header.offsetLeft;

        marker.style.width = width + 'px';
        marker.style.transform = `translate(${elementOffset}px, -3px)`;    
    };

    //get the width and offset of the element
    const toggleActive = function toggleActive(e) {
        e.preventDefault();

        if(e.target.tagName === 'LI'){
            const links = document.querySelectorAll('.menu-item');
        
            links.forEach( link => link.classList.remove('selected-item'));
            
            const activeItem = e.target;
        
            const offset = getItemOffset(activeItem);
            const width = activeItem.getBoundingClientRect().width
            moveMarker(offset , width);
        }
    };

    const menu = document.querySelector('.headers-list');
    menu.addEventListener('click', toggleActive); 

    
},[])
    
    
    
    return ( 
        <section className="our-services-container">
            <h1 className="fancy-border our-services-title">Our Services</h1>
            <div className="our-services">

                {/*desktop view of the selection box  */}
                <div className="headers">
                    <ul onClick={loadService} className="headers-list ">
                        <li id="nails"  className='menu-item'>nails</li>
                        <li id="hair" className='menu-item'>hair</li>
                        <li id="facial" className='menu-item'>facial</li>
                    </ul>
                    <div className="selected-item"></div>
                </div>

                {/* mobile view of the selection */}
                <div className="select">
                    <select  onChange={(e)=>SelectServices(e)} className="select-services">
                        <option id="nails" value="nails">nails</option>
                        <option id="hair" value="hair" defaultValue={'hair'}>hair</option>
                        <option id="facial" value="facial" >facial</option>
                    </select>
                </div>


                {   
                    services.map(service => <SingleService key={service.id} service={service}/>)
                }

                 
            </div>
        </section>
    );
}
 
export default OurServices;