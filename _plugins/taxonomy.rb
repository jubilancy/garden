# Generates /tags/<slug>/ and /topics/<slug>/ pages.
# Custom plugins don't run on the default GitHub Pages builder; deploy with GitHub Actions, Netlify or Cloudflare Pages.
module Garden
  class TaxPage < Jekyll::PageWithoutAFile
    def initialize(site, kind, name)
      slug = Jekyll::Utils.slugify(name)
      super(site, site.source, File.join(kind, slug), 'index.html')
      @data = {'layout' => 'taxonomy', 'title' => (kind == 'tags' ? '#' : '') + name, 'kind' => kind, 'term' => name, 'permalink' => "/#{kind}/#{slug}/"}
      self.content = ''
    end
  end
  class Gen < Jekyll::Generator
    safe true
    def generate(site)
      docs = site.documents.reject { |d| d.data['draft'] }
      {'tags' => 'tags', 'topics' => 'topics'}.each do |kind, key|
        docs.flat_map { |d| Array(d.data[key]) }.uniq.each { |t| site.pages << TaxPage.new(site, kind, t.to_s) }
      end
    end
  end
end
