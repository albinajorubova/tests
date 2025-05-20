import { toast } from 'sonner';

export const showErrorToast = (message) => {
  toast.custom((t) => (
    <div
      style={{
        background: '#1f2937',
        color: 'white',
        padding: '14px 18px',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '320px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
      }}
    >
      <span>{message}</span>
      <button
        onClick={() => toast.dismiss(t)}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '18px',
          marginLeft: '12px',
          cursor: 'pointer',
        }}
        aria-label="Закрыть"
      >
        ×
      </button>
    </div>
  ));
};
