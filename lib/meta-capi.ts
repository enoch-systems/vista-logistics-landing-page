/**
 * Meta Conversions API (CAPI) integration
 * Use this for server-side event tracking (form submissions, etc.)
 */

const PIXEL_ID = '1882671399087219';
const ACCESS_TOKEN = 'EAAKt1rzsoLsBQ04kQooObZBxLCinrPXxZCZA7kABFYmFuHGuB0qIs6gM6krA5Gdz3piJ37HYvWO2iZB9ANe9wB8oGm1VFJLansInsapGtd0RVj8PxA25ZBFNuHEZCFKZBOOH9nPLcseBN8df2QgQwUwTzc5NLr8dCi5cnPEGLR0rFl1uaBQZCj3YpW9Y5guaBQZDZD';

interface EventData {
  eventName: string;
  eventId?: string;
  eventSourceUrl?: string;
  userEmail?: string;
  userPhone?: string;
  userData?: {
    em?: string; // hashed email
    ph?: string; // hashed phone
    fn?: string; // hashed first name
    ln?: string; // hashed last name
  };
  customData?: Record<string, string | number>;
}

/**
 * Send event to Meta Conversions API
 * Useful for tracking form submissions, purchases, etc.
 */
export async function trackEventWithCAPI(eventData: EventData) {
  try {
    const eventSourceUrl = eventData.eventSourceUrl || (typeof window !== 'undefined' ? window.location.href : '');

    const payload = {
      data: [
        {
          event_name: eventData.eventName,
          event_id: eventData.eventId || `${Date.now()}`,
          event_source_url: eventSourceUrl,
          user_data: {
            em: eventData.userEmail,
            ph: eventData.userPhone,
            ...eventData.userData,
          },
          custom_data: eventData.customData || {},
        },
      ],
      access_token: ACCESS_TOKEN,
    };

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      console.error('CAPI Event Error:', await response.json());
      return { success: false };
    }

    console.log('CAPI Event Tracked:', eventData.eventName);
    return { success: true };
  } catch (error) {
    console.error('CAPI Request Error:', error);
    return { success: false, error };
  }
}

/**
 * Track a lead submission (for form submits)
 */
export async function trackLead(email?: string, phone?: string) {
  return trackEventWithCAPI({
    eventName: 'Lead',
    eventId: `lead_${Date.now()}`,
    userEmail: email,
    userPhone: phone,
  });
}

/**
 * Track a purchase/conversion
 */
export async function trackPurchase(
  value: number,
  currency: string = 'NGN',
  email?: string
) {
  return trackEventWithCAPI({
    eventName: 'Purchase',
    eventId: `purchase_${Date.now()}`,
    userEmail: email,
    customData: {
      value,
      currency,
    },
  });
}
