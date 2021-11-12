export default function Article({ articleId }) {
  return (
    <article>
      {!articleId ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{articleId.title}</h2>
          <p className="date">{`Posted: ${articleId.date}`}</p>
          <p className="body">{articleId.body}</p>
        </section>
      )}
    </article>
  );
}