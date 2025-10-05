import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Discord Webhook Sender | Seez Utils",
  description: "Send messages to Discord via webhooks.",
  keywords: [
    "Discord webhook sender",
    "Send Discord messages",
    "Discord bot messages",
    "Webhook testing tool",
    "Seez Utils Discord",
    "Minecraft Discord integration",
    "Seez Utils",
  ],
};

export default function DiscordWebhookSenderPage() {
  return (
    <main className="px-4 max-w-7xl mx-auto">
      <div className="min-h-screen max-h-screen overflow-hidden w-full grid grid-cols-2">
        {/* Edit the webhook messages */}
        <ScrollArea className="max-h-screen">
          <div className="p-4 w-full">
            <form action="">
              <FieldGroup>
                <FieldSet>
                  <FieldLegend>Discord Webhook Sender</FieldLegend>
                  <FieldDescription>
                    Send messages to Discord via webhooks.
                  </FieldDescription>
                  <FieldGroup>
                    <Field>
                      <FieldLabel>Webhook URL</FieldLabel>
                      <Input
                        placeholder="https://discord.com/api/webhooks/..."
                        type="password"
                        required
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>
                <FieldSeparator />
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="message"
                >
                  <AccordionItem value="profile">
                    <AccordionTrigger>Webhook Profile</AccordionTrigger>
                    <AccordionContent>
                      <FieldSet>
                        <FieldDescription>
                          Override the default webhook profile.
                        </FieldDescription>
                        <FieldGroup className="px-1">
                          <Field>
                            <FieldLabel>Username</FieldLabel>
                            <Input type="text" />
                          </Field>
                          <Field>
                            <FieldLabel>Avatar URL</FieldLabel>
                            <Input type="text" />
                          </Field>
                        </FieldGroup>
                      </FieldSet>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="message">
                    <AccordionTrigger>Message</AccordionTrigger>
                    <AccordionContent>
                      <FieldSet>
                        <FieldDescription>
                          This is the content of the message that will be sent
                          to Discord.
                        </FieldDescription>
                        <FieldGroup className="px-1">
                          <Field>
                            <FieldLabel>Content</FieldLabel>
                            <Textarea placeholder="Message content" />
                          </Field>
                          <Field>
                            <FieldLabel>File</FieldLabel>
                            <div className="flex gap-x-2">
                              <Input type="file" className="border-dashed" />
                              <Button variant={"destructive"}>Clear</Button>
                            </div>
                          </Field>
                        </FieldGroup>
                        <Button>Add Embed</Button>
                        <FieldSeparator />
                        <Accordion
                          type="single"
                          collapsible
                          className="border px-2 rounded-lg"
                        >
                          <EmbedMessage />
                        </Accordion>
                      </FieldSet>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </FieldGroup>
            </form>
          </div>
        </ScrollArea>
        {/* Preview of the messages */}
        <ScrollArea className="bg-blue-400 max-h-screen">
          Preview of the messages
        </ScrollArea>
      </div>

      <Footer />
    </main>
  );
}

function EmbedMessage() {
  return (
    <AccordionItem value="embed">
      <AccordionTrigger>Embed</AccordionTrigger>
      <AccordionContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="author">
            <AccordionTrigger>Author</AccordionTrigger>
            <AccordionContent>
              <FieldGroup className="px-1">
                <Field>
                  <FieldLabel>Author Name</FieldLabel>
                  <Input type="text" />
                </Field>
                <div className="flex gap-x-2">
                  <Field>
                    <FieldLabel>Author URL</FieldLabel>
                    <Input type="text" />
                  </Field>
                  <Field>
                    <FieldLabel>Author Icon URL</FieldLabel>
                    <Input type="text" />
                  </Field>
                </div>
              </FieldGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="body">
            <AccordionTrigger>Body</AccordionTrigger>
            <AccordionContent>
              <FieldGroup className="px-1">
                <Field>
                  <FieldLabel>Title</FieldLabel>
                  <Input type="text" />
                </Field>
                <Field>
                  <FieldLabel>Description</FieldLabel>
                  <Textarea placeholder="Description" />
                </Field>
                <div className="flex gap-x-2">
                  <Field>
                    <FieldLabel>URL</FieldLabel>
                    <Input type="text" />
                  </Field>
                  <Field>
                    <FieldLabel>Color</FieldLabel>
                    <div className="flex gap-x-2">
                      <Input type="text" />
                    </div>
                  </Field>
                </div>
              </FieldGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="fields">
            <AccordionTrigger>Fields</AccordionTrigger>
            <AccordionContent>
              <FieldGroup className="px-1">
                <Button>Add Field</Button>
                {/* TODO: add field component */}
              </FieldGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="images">
            <AccordionTrigger>Images</AccordionTrigger>
            <AccordionContent>
              <FieldGroup className="px-1">Images</FieldGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="footer">
            <AccordionTrigger>Footer</AccordionTrigger>
            <AccordionContent>
              <FieldGroup className="px-1">Footer</FieldGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  );
}
