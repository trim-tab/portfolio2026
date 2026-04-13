import React from 'react'
import Image from 'next/image'

export default function post() {

  return (
    <>
    <div className="m-10">
    <div>post</div>
    <h3>April 4th, 2026 20:14</h3>
<p className='mt-10 mb-2'>We decided this years Trunk-or-Treat theme shall be: </p>
<p className='mb-2'>
drum roll...</p>
<p className='mb-2'>
Casita! Specifically The Casita from the major motion picture Encanto.
</p> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/aA_RNbJszis?si=SoqQ6EUVRWlcJWwE&amp;controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

<p className='mb-4'>After a little palaver at our favorite, neighborhood, conglomerate coffee-sita, we were able to come to decisions on not very much at all. Some key targets, however, were set in our sights.
</p><p className='mb-4'>
-Moving doors
</p><p className='mb-4'>
 -Potential in partnering with our local robotics company: Pololu 
</p><p className='mb-4'>

-distance sensors
</p><p className='mb-4'>

The most interesting part of the engineering I think both of us agreed was the possibility of getting the roof shingles to undulate like the movie. Discussed solutions included:
</p><p className='mb-2'>

rack and pinion mechanisms
</p><p className='mb-2'>
<Image 
src="/images/casita/20260404/3.jpg"
 alt="Animated GIF"
      width={500}
      height={500}
      unoptimized={true} // Essential to keep the animation
    />
conveyor belts
</p><p className='mb-2'>

Spirograph
</p>
<Image 
src="/images/casita/20260404/2.jpg"
 alt="Animated GIF"
      width={500}
      height={500}
      unoptimized={true} // Essential to keep the animation
    /><p className='mb-2'>

Dino power!
</p>
<Image 
src="/images/casita/20260404/gifs/dinopower.gif"
 alt="Animated GIF"
      width={500}
      height={500}
      unoptimized={true} // Essential to keep the animation
    />
<p className='mb-2'>

articulating tiles
</p><p className='mb-2'>

harvesting old 3d printer x-axis parts
</p><p className='mb-2'>
<Image 
src="/images/casita/20260404/4.jpg"
 alt="Animated GIF"
      width={500}
      height={500}
      unoptimized={true} // Essential to keep the animation
    />
cams, lobes, eccentric gears
</p><p className='mb-2'>

price analysis (less servos | motors == good)
</p><p className='mb-2'>


<a href="https://pbclinear.com/blogs/blog/lead-screw-or-belt-drives">belt driven or lead screw linear actuators</a> 
</p>
</div>
 </>  
  )
}
