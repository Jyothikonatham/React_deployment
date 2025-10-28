import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Content1 from './Component/Image'
import { Video } from './Component/Video';
import { Audio } from './Component/Audio';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Content1 />
  <Audio />
  <Video />
  
  </StrictMode>,
)
