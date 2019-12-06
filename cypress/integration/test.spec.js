describe('App E2E', () => {
  it('노래를 재생할 수 있다.', () => {
    cy.log('localhost:3000에 접속한다. 애니메이션을 위해 2초를 쉰다.')

    cy.log('Albums에 들어간다')

    cy.log('Albums 카테고리에 들어와있는지 확인한다.')

    cy.log('Album 하나를 클릭하여 들어간다.')

    cy.log('하단 노래 플레이어가 play 버튼인지 확인한다.')

    cy.log('노래를 재생시킨다')

    cy.log('하단 노래 플레이어가 pause 버튼으로 바뀌었는지 확인한다.')
  });

  it('플레이 리스트를 만들 수 있다.', () => {
    const LIST_NAME = '나만의 리스트!'
    const DESCRIPTION = '나만의 리스트 입니다~';

    cy.log('localhost:3000에 접속한다.')

    cy.log('PlayList에 들어간다.')

    cy.log('플레이 리스트를 추가할 수 있는지 확인하고, 클릭한다.');

    cy.log('PlayList 이름을 입력한다.');

    cy.log('PlayList 설명을 입력한다.');

    cy.log('Done 버튼을 누른다.');

    cy.log('올바른 title로 추가되었는지 확인한다.');
  })
})