type Props = {
  /** Google Drive file ID */
  id: string;
  title?: string;
};

/**
 * Live-embeds a Google Drive video via its /preview iframe.
 * The file must be shared as "Anyone with the link → Viewer".
 * Nothing is hosted in the repo — the video streams straight from Drive.
 */
export default function VideoEmbed({ id, title = "Project film" }: Props) {
  return (
    <div className="relative aspect-video w-full overflow-hidden border border-line bg-ink/[0.04]">
      <iframe
        src={`https://drive.google.com/file/d/${id}/preview`}
        title={title}
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
