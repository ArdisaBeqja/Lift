import './section-title.scss';

function SectionTitle(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h2' } = props;

  return (
    <>
      <div className={`section-title ${props.extraClass || ''}`}>
        {props?.subtitle && (
          <span className={`subtitle ${props.subtitleClass || ''}`}>
            {props.subtitle}
          </span>
        )}
        <HeadingTag className={`title ${props.titleClass || ''}`}>
          {props.title}
        </HeadingTag>
        {props?.separator && <div className={`${props.separator || ''}`}></div>}
        {props?.content && <p className={`${props.space || ''}`}>{props.content}</p>}
      </div>
    </>
  );
}

export default SectionTitle;
