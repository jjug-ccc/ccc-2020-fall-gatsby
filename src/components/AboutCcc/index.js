import React from 'react'

const AboutCcc = ({ gridItem }) => (
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
      <dt>登録 / Register</dt>
      <dd><a href={gridItem.register} target="blank" rel="noopener">{gridItem.register}</a></dd>
      <dt>スケジュール / Schedule</dt>
      <dd><a href={gridItem.schedule} target="blank" rel="noopener">{gridItem.schedule}</a></dd>
      <dt>ハッシュタグ / Hashtag</dt>
      <dd><a href="https://twitter.com/search?q=%23jjug_ccc" target="blank" rel="noopener">#jjug_ccc</a>{gridItem.hashtag}</dd>
    </dl>

    <p><b>{gridItem.method}</b></p>
  </div>
);

export default AboutCcc
