import Loading from "../assets/API_PRO_LOADING.gif";

export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black  overflow-hidden"
      style={{
        width: "100vw",
        height: "100vh",
    
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src={Loading}
          alt="Loading"
          style={{
            width: 200,
            height: 200,
            animation: "pulse 1.5s ease-in-out infinite alternate",
          }}
        />
        
      </div>
    </div>
  );
}
