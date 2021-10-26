import styles from './styles.module.scss';

interface SubscribeButtonProps {
    priceID: string;
}

function SubscribeButton ( {priceID}: SubscribeButtonProps) {
    return (
        <button 
            type="button"    
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    )
}

export { SubscribeButton };