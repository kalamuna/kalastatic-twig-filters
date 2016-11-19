var assert = require('assert'),
    twigFilters = require('..'),
    Twig = require('twig'),
    twig = Twig.twig;

describe('kalastatic-twig-filters', function(){
  // Add the Twig Filters to Twig.
  twigFilters(Twig);

  it('should slugify string', function(done){

    var template = twig({
      data: "{{ value|slug }}"
    });

    var output = template.render({value: "This is only a Test!"});

    assert(output === "this-is-only-a-test");

    done();

  });

  it('should do a slug match on a page title string', function(done){

    var template = twig({
      data: "{{ value|isSlugMatch('About Us') }}"
    });
    var output = template.render({value: "about-us"});
    assert( Boolean(output) === true);

    done();

  });

  it('should truncate a string and append an ellipsis on a full word', function(done){

    var template = twig({
      data: "{{ value|limit(24) }}"
    });
    var output = template.render({value: "One two three four five six"});
    assert( output === "One two three four five…" );

    done();

  });

  it('should set up the phone numbers correctly', function(done){

    var template = twig({
      data: "{{ value|phone }}"
    });
    var output = template.render({value: "925-255-5204"});
    assert.equal(output, '(925) 255-5204');

    done();

  });

  it('should append a question mark and a 10 digit numeric string based on date.now() eg: "?1467994846"', function(done){
    var template = twig({
      data: "{{ value|bustcache }}"
    });
    var output = template.render({value: "styles.css"});
    assert( output.length == ("styles.css"+"?1467995049377").length );
    done();
  });

});
