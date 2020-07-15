import React from 'react'

const CccDescription = ({ gridItem }) => (
  <div>
    <p>{gridItem.description}</p>
    <p>{gridItem.descriptionEn}</p>

    <dl>
      <dt>主催 / Organizer</dt>
      <dd>{gridItem.organizer}</dd>
      <dt>開催日時 / Date</dt>
      <dd>{gridItem.date}</dd>
      <dt>参加費 / Participation Fee</dt>
      <dd>{gridItem.participationFee}</dd>
      <dt>ハッシュタグ / Hashtag</dt>
      <dd><a href="https://twitter.com/search?q=%23jjug_ccc" target="blank" rel="noopener">#jjug_ccc</a>{gridItem.hashtag}</dd>
    </dl>
  </div>
);

export default CccDescription
