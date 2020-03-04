const assert = require('assert');
const twigFilters = require('..');
const Twig = require('twig');
const twig = Twig.twig;

describe('kalastatic-twig-filters', () => {
  // Add the Twig Filters to Twig.
  twigFilters(Twig);

  it('should slugify string', done => {
    const template = twig({
      data: '{{ value|slug }}'
    });

    const output = template.render({value: 'This is only a Test!'});

    assert(output === 'this-is-only-a-test');

    done();
  });

  it('should do a slug match on a page title string', done => {
    const template = twig({
      data: '{{ value|isSlugMatch(\'About Us\') }}'
    });
    const output = template.render({value: 'about-us'});
    assert(Boolean(output) === true);

    done();
  });

  it('should truncate a string and append an ellipsis on a full word', done => {
    const template = twig({
      data: '{{ value|limit(24) }}'
    });
    const output = template.render({value: 'One two three four five six'});
    assert(output === 'One two three four five…');

    done();
  });

  it('should set up the phone numbers correctly', done => {
    const template = twig({
      data: '{{ value|phone }}'
    });
    const output = template.render({value: '925-255-5204'});
    assert.equal(output, '(925) 255-5204');

    done();
  });

  it('should set up the phone numbers according to the given format', done => {
    const template = twig({
      data: '{{ value|phone(\'NNN.NNN.NNNN\') }}'
    });
    const output = template.render({value: '+19252555204'});
    assert.equal(output, '925.255.5204');

    done();
  });

  it('should append a question mark and a 10 digit numeric string based on date.now() eg: "?1467994846"', done => {
    const template = twig({
      data: '{{ value|bustcache }}'
    });
    const output = template.render({value: 'styles.css'});
    assert.equal(output.indexOf('?'), 10);
    done();
  });
});
