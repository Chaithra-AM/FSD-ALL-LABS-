import { useState, useEffect } from 'react'

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [pushStatus, setPushStatus] = useState(Notification.permission)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    })
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    console.log(`User response to the install prompt: ${outcome}`)
    setDeferredPrompt(null)
  }

  const handlePushPermission = async () => {
    const permission = await Notification.requestPermission()
    setPushStatus(permission)
    
    if (permission === 'granted') {
      navigator.serviceWorker.ready.then((registration) => {
        // We can simulate a push notification here for testing
        registration.showNotification('⚡ Flash Deal!', {
          body: 'A new deal just dropped.',
          icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163337.png',
          data: { url: window.location.href }
        })
      })
    }
  }

  const fetchAppData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/1')
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error("Error fetching product:", error)
    }
  }

  return (
    <div className="container">
      <h1>
        <img src="https://cdn-icons-png.flaticon.com/512/1163/1163337.png" alt="icon" className="header-icon" />
        PWA Deal Alerts
      </h1>

      <div className="card-light-blue">
        <p style={{ margin: '0 0 10px 0' }}>Get the best experience by installing our app!</p>
        <button className="btn-teal" onClick={handleInstallClick}>Install App</button>
      </div>

      <div className="card-light-gray">
        <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: '#666' }}>
          Push Permission Status: <span style={{ fontWeight: 'normal' }}>{pushStatus}</span>
        </p>
        <button className="btn-blue" onClick={handlePushPermission}>Enable Background Alerts</button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className="btn-gray" onClick={fetchAppData}>Fetch App Data (Standard API Call)</button>
      </div>

      {product && (
        <div className="product-card">
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#ddd' }}>{product.title}</h3>
          <p style={{ margin: '0', fontSize: '1.1rem', color: '#999' }}>${product.price.toFixed(2)}</p>
        </div>
      )}
    </div>
  )
}

export default App
