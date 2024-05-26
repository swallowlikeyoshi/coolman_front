import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const post = { id, title: `1. "아라리요, 평창"은 정말로 나쁘기만 했었나`, datetime: '2024-05-27', content: '국가 사업으로 진행하는 프로젝트에는 어쩔 수 없이 시차가 존재하게 된다. 프로젝트를 계획하고, 예산을 집행하고, 실제 실행에 이루어지기까지 실무에서는 많은 어려움이 존재한다. 과정에서 여러 사람들의 입김으로 초안에서 크게 벗어난 채 엉성한 기안으로 진행되기도 하고, 절차상의 공정성, 사회적 윤리 등의 사유는 공무 프로젝트가 시대에 흐름에 아무리 빨리 반응하더라도 따라가기 어려운 이유다.' };

  return (
    <div className='d-flex flex-row justify-content-center' style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <aside className="writer_comment" style={{ width: '20vw', padding: '10px', textAlign: 'center' }}>
        {/* <h2>작성자 라인</h2> */}
      </aside>
      <article className="post_detail" style={{ width: '60vw', padding: '10px' }}>
        <h1>{post.title}</h1>
        <p>작성일: {post.datetime}</p>
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube-nocookie.com/embed/TtYupPPqe2c?si=63GQo-vbZMzm1fKU" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
        <p>{post.content}</p>
        <p>"아라리요, 평창"도 이를 단적으로 보여주는 예시라고 할 수 있다. 이 프로젝트는 평창 올림픽을 2년 앞두고 댄스 챌린지를 홍보하기 위해 제작되었다. 다만 올림픽을 홍보하는 공식 영상이라고는 믿어지지 않을 정도의 퀄리티가 문제가 되었을 뿐이다.</p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <span style={{ width: '50%', padding: '10px' }}>또한 동 시기에 발표된 도쿄 올림픽 홍보 영상과 비교하면 더욱 그랬다. 헬로키티, 마리오 등 일본을 대표하는 상징적인 소재들이 대거 차용되었고, 많은 자본이 투입되어 등장하는 실제 선수들의 모습과, 공들여서 만들어진 영상미 등, 한국의 '아라리요, 평창'과 비교가 부끄러운 수준이였다.</span>
          <span style={{ width: '50%', padding: '10px' }}>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube-nocookie.com/embed/FNuqKVG781I?si=BiyVuj2otnm-nhWk" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </span>
        </div>
        <p>그러나 그로부터 자그마치 8년이 지난 2024년 지금, '아라리요, 평창'을 돌아본다면 어떨까?</p>
        <p>사견으로, 오늘날 돌아보았을 때 이 영상은 역사적 치부로 잊혀지기엔 아쉬운 곡으로 느껴졌다. 그 이유가 무엇일지 생각해보았다.</p>
        <ol>
          <li><strong>옛것과 새로운 것이 조화된 노래</strong></li>
          <p>울타리를 치는 사람은 자연스럽게 자기 자신도 울타리에 갇히게 된다. 고인물은 썩는다는 뜻이다. 멀게만 느껴질 수 있었던 '아리랑'이 현대적 해석으로 재탄생했다. 영상의 컨셉과 같이 디스코 풍으로 편곡된 곡은 그 유래를 의심케 할 정도로 흥을 불러일으키며 저절로 춤을 추고 싶게 만든다. 여기에 항구적인 효린의 목소리까지 더해져 8년이 지난 지금 들어도 옛것의 느낌이 들지 않는 세련된 곡이 되었다</p>
          <li><strong>컨셉에 충실한 유머 코드</strong></li>
          <p>이 영상의 제제는 "평창에 퍼진 CSM 바이러스"이다. 판타지적 요소를 가져온 것 부터 코믹한 효과를 노린 홍보 영상이라는 점이 보인다.</p>
          <p>또한 '돌고래유괴단'과 같이, 유머러스한 소재를 바탕으로 본격적인 광고 효과를 노리는 프로덕션이 등장했기 때문에 오늘날 돌아봤을 때 더욱 이질감 없이 받아들여질 수 있으리라 생각된다.</p>
          <li><strong>노스텔지아</strong></li>
          <p>영상에서는 2016년의 시대가 살아숨쉬고 있다. 희미한 기억 속에 생각이 나 다시 찾았던 이 영상을 보았을 때 가장 먼저 든 생각이였다. 그 때에는 나도 이 영상을 보며 웃었던 기억이 난다. 추억 보정과 함께 그 시절의 인물들이 웃는 모습을 보고 있으면 나도 뛰어들어 춤추고 싶다는 생각이 들었다.</p>
        </ol>
        <p>결론을 내리자면, 잘못된 방법으로 세상에 나와버린 걸작이라 할 수 있을 것이다.</p>
      </article>
      <aside className='reader_comment' style={{ width: '20vw', padding: '10px', textAlign: 'center' }}>
        {/* <h2>독자 라인</h2> */}
      </aside>
    </div>
  )
};

export default PostDetail;
