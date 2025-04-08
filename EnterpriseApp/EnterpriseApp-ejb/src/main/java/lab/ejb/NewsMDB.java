package lab.ejb;
import jakarta.ejb.ActivationConfigProperty;
import jakarta.ejb.MessageDriven;
import jakarta.jms.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@JMSDestinationDefinition(name = "java:app/jms/NewsQueue",
        interfaceName = "jakarta.jms.Queue", resourceAdapter = "jmsra",
        destinationName = "NewsQueue")
@MessageDriven(activationConfig = {
        @ActivationConfigProperty(propertyName =
                "destinationLookup", propertyValue = "java:app/jms/NewsQueue"),
        @ActivationConfigProperty(propertyName = "destinationType",
                propertyValue = "jakarta.jms.Queue")
})
public class NewsMDB implements MessageListener {
    @PersistenceContext
    private EntityManager em;

    @Override
    public void onMessage(Message message) {
        try {
            TextMessage textMessage = (TextMessage) message;
            String text = null;
            try {
                text = textMessage.getText();
            } catch (JMSException e) {
                throw new RuntimeException(e);
            }

            String[] parts = text.split("\\|", 2);

            String heading = parts[0];
            String body = parts[1];

            NewsItem newsItem = new NewsItem();
            newsItem.setHeading(heading);
            newsItem.setBody(body);

            em.persist(newsItem);
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
}
