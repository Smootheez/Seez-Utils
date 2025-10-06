"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "@/components/footer";
import {
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldDescription,
  Field,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";

export default function DiscordWebhookSenderPage() {
  const [embeds, setEmbeds] = useState<number[]>([0]);

  const addEmbed = () => {
    if (embeds.length >= 10) return;
    setEmbeds((prev) => [...prev, prev.length]);
  };

  const removeEmbed = (index: number) => {
    setEmbeds((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="md:px-4 max-w-7xl mx-auto">
      <div className="min-h-screen max-h-screen overflow-hidden w-full grid grid-cols-1 md:grid-cols-2">
        {/* Edit the webhook messages */}
        <ScrollArea className="max-h-screen">
          <div className="p-4 w-full">
            <form>
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
                              <Button variant="destructive">Clear</Button>
                            </div>
                          </Field>
                        </FieldGroup>

                        <Button
                          type="button"
                          onClick={addEmbed}
                          disabled={embeds.length >= 10}
                        >
                          Add Embed ({embeds.length}/10)
                        </Button>

                        <FieldSeparator />

                        <Accordion
                          type="multiple"
                          className="border px-2 rounded-lg mt-2"
                        >
                          {embeds.map((id, i) => (
                            <EmbedMessage
                              key={id}
                              index={i}
                              onRemove={() => removeEmbed(i)}
                            />
                          ))}
                        </Accordion>
                      </FieldSet>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </FieldGroup>
            </form>
          </div>
        </ScrollArea>

        {/* Preview */}
        <ScrollArea className="bg-blue-400 max-h-screen">
          Preview of the messages
        </ScrollArea>
      </div>

      <Footer />
    </main>
  );
}

function EmbedMessage({
  index,
  onRemove,
}: {
  index: number;
  onRemove: () => void;
}) {
  const [fields, setFields] = useState<number[]>([0]);

  const addField = () => {
    if (fields.length >= 25) return;
    setFields((prev) => [...prev, prev.length]);
  };

  const removeField = (index: number) => {
    setFields((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <AccordionItem value={`embed-${index}`}>
      <AccordionTrigger>Embed #{index + 1}</AccordionTrigger>
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
                    <Input type="text" />
                  </Field>
                </div>
              </FieldGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fields">
            <AccordionTrigger>Fields</AccordionTrigger>
            <AccordionContent>
              <FieldGroup className="px-1">
                <Accordion
                  type="multiple"
                  className="border px-2 rounded-lg mt-2"
                >
                  {fields.map((id, i) => (
                    <FieldMessage
                      key={id}
                      index={i}
                      onRemove={() => removeField(i)}
                    />
                  ))}
                </Accordion>

                <Button
                  type="button"
                  onClick={addField}
                  disabled={fields.length >= 25}
                >
                  Add Field ({fields.length}/25)
                </Button>
              </FieldGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="images">
            <AccordionTrigger>Images</AccordionTrigger>
            <AccordionContent>
              <FieldGroup className="px-1">
                <Field>
                  <FieldLabel>Image URL</FieldLabel>
                  <Input type="text" />
                </Field>
                <Field>
                  <FieldLabel>Thumbnail URL</FieldLabel>
                  <Input type="text" />
                </Field>
              </FieldGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="footer">
            <AccordionTrigger>Footer</AccordionTrigger>
            <AccordionContent>
              <FieldGroup className="px-1">
                <Field>
                  <FieldLabel>Text</FieldLabel>
                  <Textarea placeholder="Footer text" />
                  <div className="flex gap-x-2">
                    <Field>
                      <FieldLabel>Timestamp</FieldLabel>
                      <Input type="time" />
                    </Field>
                    <Field>
                      <FieldLabel>Icon URL</FieldLabel>
                      <Input type="text" />
                    </Field>
                  </div>
                </Field>
              </FieldGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button variant="destructive" className="w-full" onClick={onRemove}>
          Remove Embed
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
}

function FieldMessage({
  index,
  onRemove,
}: {
  index: number;
  onRemove: () => void;
}) {
  return (
    <AccordionItem value={`field-${index}`}>
      <AccordionTrigger>Field #{index + 1}</AccordionTrigger>
      <AccordionContent>
        <FieldGroup className="px-1">
          <Field>
            <FieldLabel>Name</FieldLabel>
            <div className="flex gap-x-2 items-center">
              <Input type="text" />
              <div className="flex flex-col items-center gap-y-1">
                <Label>Inline</Label>
                <Switch />
              </div>
            </div>
          </Field>
          <Field>
            <FieldLabel>Value</FieldLabel>
            <Textarea placeholder="Field value" />
          </Field>
          <Button variant="destructive" onClick={onRemove}>
            Remove Field
          </Button>
        </FieldGroup>
      </AccordionContent>
    </AccordionItem>
  );
}
