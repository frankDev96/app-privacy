import type { ComponentType } from "react";
import { PolicySection } from "@/components/policy-document";

export function HydrofitPolicy() {
  return (
    <>
      <section className="space-y-3">
        <p>
          HydroFit.do is a personal hydration companion. This policy describes
          how it handles your information on this device.
        </p>
      </section>

      <PolicySection title="On this device">
        <p>
          HydroFit.do stores gender, weight, wake and bed times, intake logs,
          reminder preferences, and an optional name and profile photo on this
          device. It does not require an account, and it does not upload that
          information to a HydroFit cloud or copy it to another device.
        </p>
        <p>
          You can delete this data yourself. In Settings, the Restore to
          defaults button erases everything HydroFit has stored: profile
          details, intake logs, reminder preferences, and any saved name or
          photo. Nothing from that storage is kept. Removing HydroFit from the
          device deletes it as well.
        </p>
      </PolicySection>

      <PolicySection title="How the data is used">
        <p>
          HydroFit uses it to calculate a daily target of weight × 33 ml, log
          water, show a plan and stats, personalize the screen, and send
          reminders. Targets are estimates, not medical advice.
        </p>
      </PolicySection>

      <PolicySection title="Advertising">
        <p>
          When HydroFit shows ads, they are Google AdMob banners and occasional
          full-screen ads. Google may process device identifiers under
          Google&apos;s Privacy Policy. HydroFit does not intentionally send
          hydration logs or biometrics
          to AdMob. Where ads are shown, you can review consent in Settings
          under Ads & privacy.
        </p>
      </PolicySection>

      <PolicySection title="Your choices">
        <p>
          You can manage reminder permission in device settings and change
          reminder mode in Settings. To delete your data, use Restore to
          defaults in Settings. That button fully erases the data stored in
          HydroFit. HydroFit does not sell personal information.
        </p>
      </PolicySection>

      <PolicySection title="Children">
        <p>
          HydroFit.do is not directed at children under 13. If a child entered
          information, remove it with Restore to defaults or by removing
          HydroFit from the device.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          Privacy questions can be sent to the developer contact published for
          HydroFit.do.
        </p>
      </PolicySection>
    </>
  );
}

export function HelpEscapeArrowPolicy() {
  return (
    <>
      <section className="space-y-3">
        <p>
          This policy explains how the Android game Help Escape Arrow and this
          website handle information. The game is distributed through Google
          Play.
        </p>
        <p>
          The game does not ask you to create an account. It does not have its
          own servers, and it does not send your progress, settings, or a name
          or email address to us.
        </p>
      </section>

      <PolicySection title="Information stored on your device">
        <p>
          The game keeps a save file on your device so you can continue where
          you left off. That file stays on the device. It includes:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>The highest level you have cleared</li>
          <li>Sparks, hammers, hints, and daily undo charges</li>
          <li>Arrow skins and trails you own or have equipped</li>
          <li>
            Settings for sound, haptics, music volume, arrow pulse, screen
            shake, and frame rate
          </li>
          <li>
            How often full-screen ads have been shown, and whether you have
            turned banners and full-screen ads off
          </li>
          <li>
            Progress on the optional ad-free reward, including ads watched and
            the cooldown timer
          </li>
          <li>Whether the game has already asked Google Play for a rating</li>
        </ul>
        <p>
          Reset Sector Progress in Settings clears level progress only. Sparks
          and cosmetics stay. Uninstalling the app deletes this local save.
        </p>
      </PolicySection>

      <PolicySection title="Information we do not collect">
        <p>
          We do not collect your name, email address, phone number, contacts,
          photos, microphone audio, or precise location. We do not run our own
          analytics.
        </p>
      </PolicySection>

      <PolicySection title="Advertising">
        <p>
          The game shows ads through Google AdMob. Those ads can be banners,
          full-screen ads between some level clears, and optional rewarded
          videos. Rewarded videos are your choice. Watching one can grant an
          in-game reward, or count toward turning banners and full-screen ads
          off.
        </p>
        <p>
          Google and its advertising partners may collect and use an
          advertising identifier, IP address, device and app information,
          approximate location derived from the IP address, and information
          about how you interact with ads. They use this to deliver, measure,
          and limit ads.
        </p>
        <p>
          Google describes that processing in the Google Privacy Policy and in
          how Google uses information from sites or apps that use its services.
          You can review ad personalization in Google Ads Settings. On Android
          you can also reset or delete your advertising ID in the device
          settings.
        </p>
      </PolicySection>

      <PolicySection title="Google Play">
        <p>
          If you installed the game from Google Play, the game may ask Play
          whether a newer version is available and then open Play&apos;s update
          flow. After some levels it may also ask Play to show its rating
          sheet. We do not receive the text of that rating on our own servers.
          Google&apos;s privacy policy covers these Play services.
        </p>
      </PolicySection>

      <PolicySection title="This website">
        <p>
          This site publishes this policy. It does not create accounts, and it
          does not set its own cookies or analytics tags. The service that
          hosts the site may keep ordinary connection logs, such as IP address,
          browser type, and the page requested, to operate and secure the site.
        </p>
      </PolicySection>

      <PolicySection title="Children">
        <p>
          Help Escape Arrow is not directed at children under 13, and we do not
          knowingly collect personal information from children.
        </p>
      </PolicySection>

      <PolicySection title="Changes">
        <p>
          If this policy changes, the new version will be posted on this page
          with a new effective date.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          Questions about this policy can be sent through the contact on the
          game&apos;s Google Play listing.
        </p>
      </PolicySection>
    </>
  );
}

export const policies: Record<string, ComponentType> = {
  hydrofit: HydrofitPolicy,
  helpescapearrow: HelpEscapeArrowPolicy,
};
