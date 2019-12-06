describe('App E2E', () => {
  it('노래를 재생할 수 있다.', () => {
    cy.log('localhost:3000에 접속한다. 애니메이션을 위해 2초를 쉰다.')

    cy.log('Albums에 들어간다')

    cy.log('Albums 카테고리에 들어와있는지 확인한다.')
    cy.get('.AfpfA > .sc-tilXH')
    .contains('Albums')

    cy.log('Album 하나를 클릭하여 들어간다.')
    cy.get(':nth-child(1) > .sc-htoDjs > .sc-dnqmqq')
    .click();

    cy.log('하단 노래 플레이어가 play 버튼인지 확인한다.')
    cy.get('.sc-esjQYD > [src="images/play.svg"]')

    cy.log('노래를 재생시킨다')
    cy.get('.sc-fMiknA > :nth-child(3) > .sc-htpNat > .sc-bxivhb')
    .click();

    cy.log('하단 노래 플레이어가 pause 버튼으로 바뀌었는지 확인한다.')
    cy.get('.sc-esjQYD > [src="images/pause.svg"]')
  });

  it('플레이 리스트를 만들 수 있다.', () => {
    const LIST_NAME = '나만의 리스트!'
    const DESCRIPTION = '나만의 리스트 입니다~';

    cy.visit('localhost:3000')
    cy.wait(2000);

    cy.get(':nth-child(3) > .sc-htpNat')
    .click();

    cy.get('.sc-cSHVUG')
    .contains('New Playlist...')
    .click();

    cy.get('#playlist-title')
    .type(LIST_NAME);

    cy.get('#playlist-description')
    .type(DESCRIPTION);

    cy.get(':nth-child(3) > .sc-kafWEX')
    .click();

    cy.get(':nth-child(2) > .sc-cSHVUG')
    .contains(LIST_NAME);
  })
})